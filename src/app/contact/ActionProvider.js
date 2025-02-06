// class ActionProvider {
//   constructor(createChatBotMessage, setStateFunc) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//   }

//   handleHello = () => {
//     const message = this.createChatBotMessage("Hello! How can I assist?");
//     this.updateChatbotState(message);
//   };

//   handleDefault = () => {
//     const message = this.createChatBotMessage("I'm not sure I understand.");
//     this.updateChatbotState(message);
//   };

//   updateChatbotState = (message) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       messages: [...prevState.messages, message],
//     }));
//   };
// }

// export default ActionProvider;
