export default function Options({ setState, createChatBotMessage }) {
    const handleOption = (message) => {
      const newMessage = createChatBotMessage(message);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, newMessage],
      }));
    };
  
    const options = [
      { text: "Looking for your old portfolio", handler: () => handleOption("Sure! Here's the link.") },
      { text: "Just saying hello!", handler: () => handleOption("Hello! Nice to meet you.") },
      { text: "Interested in mentorship", handler: () => handleOption("I'd love to mentor you!") },
      { text: "We'd like to hire you", handler: () => handleOption("Let's talk more about it!") },
    ];
  
    return (
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={option.handler}
            className="w-full text-left border border-[#025A4E] text-[#025A4E] px-4 py-2 rounded-full transition hover:bg-[#edefd8]"
          >
            {option.text}
          </button>
        ))}
      </div>
    );
  }
  