import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { backUrl, FriendshipInterface, UserInterface } from "../globals";

const FriendRequestComponent = (props: {
  connectedUser: UserInterface | null;
  viewedUser: UserInterface | null;
}) => {
  const [friendship, setFriendship] = useState<FriendshipInterface | null>(
    null
  );

  //for lack of a better name
  const [panelState, setPanelState] = useState<
    "send" | "cancel" | "accept/decline" | "remove"
  >("send");

  useEffect(() => {
    if (props.connectedUser && props.viewedUser) {
      axios
        .get(`${backUrl}/friends/friendship?user_id=${props.viewedUser?._id}`, {
          withCredentials: true,
        })
        .then(({ data }) => {
          const friendship = data.friendship as FriendshipInterface | null;
          setFriendship(friendship);
          if (friendship) updatePanelState(friendship);
        });
    }
  }, [props.connectedUser, props.viewedUser]);

  const updatePanelState = (friendship: FriendshipInterface) => {
    if (!props.connectedUser || !props.viewedUser) return;
    //if there is no friendship you make one :D
    if (!friendship || friendship.status === "declined")
      return setPanelState("send");

    if (friendship.status === "accepted") return setPanelState("remove");

    if (friendship.status === "pending") {
      if (props.connectedUser._id === friendship.sender_id) {
        return setPanelState("cancel");
      }
      if (props.connectedUser._id === friendship.receiver_id) {
        return setPanelState("accept/decline");
      }
    }
  };

  const sendFriendshipRequest = async () => {
    axios
      .post(
        `${backUrl}/friends/send`,
        { receiver_id: props.viewedUser?._id },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  const declineFriendshipRequest = async () => {
    axios
      .post(
        `${backUrl}/friends/decline`,
        { receiver_id: props.viewedUser?._id },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  const clickFriendRequest = (acceptIfRequestIsIncoming?: boolean) => {
    if (!props.connectedUser || !props.viewedUser) return;
    const connectedUser = props.connectedUser as UserInterface;

    if (!friendship || friendship.status === "declined")
      return sendFriendshipRequest();
    //if status is accepted the only thing users can do is unfriend
    if (friendship.status === "accepted") return declineFriendshipRequest();

    //determine whether to behave from pov of sender or receiver
    if (connectedUser._id === friendship.sender_id) {
      return declineFriendshipRequest();
    }
    if (connectedUser._id === friendship.receiver_id) {
      if (acceptIfRequestIsIncoming === true) return sendFriendshipRequest(); // here there is a choice to either accept or decline
      return declineFriendshipRequest();
    }
  };

  return !props.connectedUser ||
    !props.viewedUser ||
    props.connectedUser._id === props.viewedUser._id ? (
    <></>
  ) : (
    <Box width={"100%"} height={"100%"} rounded={"lg"} background={"slategray"}>
      <div>
        {!friendship ? (
          <div>friendship doesnt exist</div>
        ) : (
          <div>
            friendship exists, {friendship.status}, this panel's state is{" "}
            {panelState}
          </div>
        )}
      </div>
      <div>
        <Button
          onClick={() => {
            clickFriendRequest(true);
          }}
          padding={"0.75rem"}
          rounded={"lg"}
          fontSize={"2xl"}
          textColor={"white"}
          background={"blue.600"}
        >
          {panelState !== "accept/decline" ? panelState : "Accept"}
        </Button>
        {panelState !== "accept/decline" ? (
          <></>
        ) : (
          <Button
            onClick={() => {
              clickFriendRequest(false);
            }}
            padding={"0.75rem"}
            rounded={"lg"}
            textColor={"white"}
            bg={"red.600"}
          >
            Decline
          </Button>
        )}
      </div>
    </Box>
  );
};

export default FriendRequestComponent;
