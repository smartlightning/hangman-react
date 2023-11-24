import { useEffect, useRef, useState } from "react";

function App() {
  let letters = [];
  const [word, setWord] = useState(letters);
  const [value, setValue] = useState("");
  const random = Math.floor(Math.random() * (15 - 5) + 5);
  let wrongGuesses = 0;
  const letterRefs = useRef([]);
  const svgRefs = useRef([]);

  useEffect(() => {
    fetchWord();
  }, []);
  // fetch the word
  const fetchWord = async () => {
    await fetch(`https://random-word-api.herokuapp.com/word?length=${random}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWord(data);
      });
  };

  const letterCount = () => {
    for (let i = 0; i < random; i++) {
      letters.push(word.toString().charAt(i));

      console.log(letters);
    }
  };
  letterCount();

  const checkLetter = () => {
    letters.forEach((letter, index) => {
      if (letter === value) {
        letterRefs.current[index].classList.remove("hidden");
      }
    });

    if (!letters.includes(value)) {
      wrongGuesses++;
      svgRefs.current[wrongGuesses].classList.remove("hidden");

      if (wrongGuesses >= 10) {
        console.log("verloren");
      }
    }
  };

  return (
    <>
      <div className="bg-red-500">
        <input
          type="text"
          id="letterInput"
          placeholder="Buchstabe eingeben"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <input type="button" value="Raten" onClick={checkLetter}></input>
        <br></br>
        <br></br>
        <div className="flex w-full">
          {letters.map((letter, i) => {
            return (
              <div className="flex flex-col pr-[5px]" key={i}>
                <span
                  ref={(el) => (letterRefs.current[i] = el)}
                  className={"flex-row hidden"}
                >
                  {letter}
                </span>
                <span className="flex-row">_</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[1] = el)}
              stroke="#000"
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_1"
              y2="502.99999"
              x2="336"
              y1="91"
              x1="336"
              fill="none"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[2] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_2"
              y2="91"
              x2="340"
              y1="90"
              x1="539"
              stroke="#000"
              fill="none"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[3] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_3"
              y2="96"
              x2="539"
              y1="172"
              x1="539"
              stroke="#000"
              fill="none"
            />
            <ellipse
              className="hidden"
              ref={(el) => (svgRefs.current[4] = el)}
              ry="34"
              rx="29"
              id="svg_4"
              cy="214"
              cx="539"
              stroke="#000"
              fill="#fff"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[5] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_5"
              y2="251"
              x2="538"
              y1="342"
              x1="537"
              stroke="#000"
              fill="none"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[6] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_6"
              y2="267"
              x2="539"
              y1="248"
              x1="620"
              stroke="#000"
              fill="none"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[7] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_7"
              y2="266"
              x2="538"
              y1="235"
              x1="437"
              stroke="#000"
              fill="none"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[8] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_8"
              y2="427"
              x2="498"
              y1="339"
              x1="537"
              stroke="#000"
              fill="none"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[9] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_9"
              y2="337"
              x2="538"
              y1="433"
              x1="584"
              stroke="#000"
              fill="none"
            />
            <line
              className="hidden"
              ref={(el) => (svgRefs.current[10] = el)}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_10"
              y2="93"
              x2="387"
              y1="160"
              x1="336"
              stroke="#000"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </>
  );
}

export default App;
