const types = { info: "dodgerblue", warn: "darkorange", error: "red",success:"forestgreen" };

export const showToast = (o)=> {
  if (!o) o = {message:"Empty message"}
  const { message, time, from, type } = o;
  const m = document.createElement("div"); m.classList.add("toast");
  const keyframes = [];
  let s = "";

  switch (from) {
    case "tl":
    case "tr":
      keyframes.push({ transform: "translateY(-100%)", top: 0 });
      s = from === "tl" ? "let:0;top:0;" : "right:0;top:0;";
      break;
    case "bc":
      keyframes.push({ transform: "translateY(100%)", bottom: 0 });
      s = "right:10px;bottom:0;left:10px;width:fit-content;margin:30px auto;";
      break;
    case "bl":
    case "br":
    default:
      keyframes.push({ transform: "translateY(100%)", bottom: 0 });
      s = from === "br" ? "right:0;bottom:0;" : "left:0;bottom:0;";
      break;
    
  }
  
  s = s +"background:" + types[type || "info"] + ";box-shadow: 0 0 10px 2px " + types[type || "info"] + ";";
  keyframes.push({ transform: "translateY(0px)" });
  m.style = s;
  m.textContent = message || o;
  document.body.appendChild(m);
  m.animate(keyframes, { duration: 300 })
  .onfinish = () => {
    console.log("Finished", keyframes);
    m.animate(keyframes, { delay: time || 1000, duration: 300, direction: "reverse" })
    .onfinish = () => {
      m.remove();
    };
  };
}

// message: A string to be displayed as a message or notification.
// time: The duration, in milliseconds, for which the message is displayed before automatic dismissed. The default duration is 1000 milliseconds (1 second).
// from: The position of the Toast on the screen. Use bl for bottom-left corner, br for bottom-right corner, tl for top-left corner, tr for top-right corner, and bc for bottom-center. The default position is bottom-left.
// type: The type of message. Use info for informational, warn for warming, error for error and success for successful messages. The default is informational message. The colors used for message types as follows: { info: "dodgerblue", warn: "darkorange", error: "red", success: "forestgreen" } , you can customize it in first line of JavaScript code.