const workplace = document.querySelector(".work-place");
const filteredContent = document.querySelector(".filtered-content");
let filter;
let itscancelBtn;
let itsName;
let clearBtn;
let globalData;
const initializer = async function () {
  try {
    // fetch("./static-job-listings-master/data.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data[0].company);
    //   });

    const response = await fetch("./static-job-listings-master/data.json");
    if (!response.ok) {
      throw new Error("could not fetch new Resources");
    }
    data = await response.json();
    globalData = data;

    // const SingerUser = data.map((user) => {
    //   return createNewUser(user);
    // });

    const filter = data.filter((each) => {
      console.log(each.languages);

      console.log(each.languages.includes("Javascript"));

      return !each.languages.includes("Javascript");
      // ||
      // each.tools.includes("Javascript")
    });

    console.log(filter);
  } catch (error) {
    console.log(error);
  }
};
window.addEventListener("DOMContentLoaded", async () => {
  const data = await initializer();
  const AllrightSectionSelect = document.querySelectorAll(".right-section");
  console.log(AllrightSectionSelect);

  const filt = function (e) {
    if (e.target.id === e.target.innerText) {
      filter = e.target.id;
      return;
    }
  };

  for (const rightSectionSelect of AllrightSectionSelect) {
    rightSectionSelect.addEventListener("click", (e) => {
      return filt(e);
    });
  }
});

let shown = true;

function createNewUser(user) {
  const content = document.createElement("div");

  function clickedFunction(e) {
    if (shown) {
      if (e.target.id === e.target.innerText) {
        filteredContent.classList.remove("hidden");
        filteredContent.classList.add("active");

        clearBtn = document.createElement("button");
        console.log(clearBtn);

        clearBtn.className =
          "border-none font- text-purple-500 text-[10px] font-bold hover:cursor-pointer relative after:content-[''] after:absolute after:left-0 after:w-0 hover:after:w-full after:bottom-0 after:h-[1px] after:bg-purple-500 after:transition-all after:duration-300 order-last absolute right-0 ml-[100px]";
        clearBtn.textContent = "clear";

        filteredContent.appendChild(clearBtn);

        shown = false;
      }
    }

    const eachContent = document.createElement("div");
    eachContent.className = "eachContent flex gap-0.5";

    itsName = document.createElement("p");
    itsName.className =
      "itsname bg-purple-100 text-[8px] hover:cursor-pointer rounded-sm font-semibold text-purple-500 hover:font-medium flex justify-center items-center leading-none p-1";
    itsName.textContent = `${filter}`;

    itscancelBtn = document.createElement("span");
    itscancelBtn.className =
      " itscancelBtn bg-purple-100 text-500 text-center rounded-sm font-semibold hover:bg-purple-700 hover:cursor-pointer hover:text-white text-purple-600 hover:font flex justify-center items-center transition-all duration-200 ease-in p-1";
    itscancelBtn.textContent = `x`;

    const children = [itsName, itscancelBtn];
    eachContent.append(...children);
    filteredContent.appendChild(eachContent);

    const deLete = function () {
      filteredContent.removeChild(eachContent);
    };

    clearBtn.addEventListener("click", () => {
      return deLete();
    });
    itscancelBtn.addEventListener("click", () => {
      console.log("help");
      return deLete();
    });
  }

  content.addEventListener("click", clickedFunction);

  content.innerHTML += `<div
        class="content shadow-md justify-between flex max-[400px]:flex-col mx-3 mt-[30px] rounded-sm border-l-2 border-l-gray-500 bg-white items-center"
        style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)" id ='${user.id}'"
      >
        <div class="left-section flex items-center gap-4 p-3">
          <div>
            <img
             src='${user.logo}'
              alt=""
              class="w-10 min-[400px]:w-[55px]"
            />
          </div>
          <div class="content-section p-0">
            <div class="top transform translate-x-[-4px] flex p-1 font-bold">
              <span class="text-[55%] mr-2 text-purple-500">${
                user.company
              }</span>
              <span
                class="text-[50%] mr-2 bg-purple-700 rounded-xl text-white p-0.5"
                >${user.new === true ? "new" : ""}</span
              >
              <span class="text-[50%] bg-purple-700 rounded-sm text-white p-0.5"
                >${user.new === true ? "featured" : ""}</span
              >
            </div>
            <div class="middle">
              <h3 class="text-[50%] font-extrabold">
                ${user.position}
              </h3>
            </div>
            <div class="bottom">
              <ul class="text-[50%] flex">
                <li class="whitespace-nowrap pr-3 font-semibold text-gray-400">
                  ${user.postedAt}
                </li>
                <li class="whitespace-nowrap pr-3 font-semibold text-gray-400">
                 ${user.contract}
                </li>
                <li class="whitespace-nowrap pr-3 font-semibold text-gray-400">
                 ${user.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="right-section text-center items-center justify-center h-[100%] p-2.5"
        >
          <span
            class="bg-purple-100 p-[4px] text-[8px] hover:cursor-pointer  rounded-sm font-semibold text-purple-500 hover:text-white hover:bg-purple-700 hover:font-medium transition-all duration-200 ease-in"
           id='${user.role}' >${user.role}</span
          >
          <span
            class="bg-purple-100 p-[4px] text-[8px] hover:cursor-pointer rounded-sm font-semibold text-purple-500 hover:text-white hover:bg-purple-700 hover:font-medium transition-all duration-200 ease-in"
           id='${user.level}' >${user.level}</span
          >

          ${user.languages
            .map((lang, i) => {
              return `<span
            class="bg-purple-100 p-[4px] text-[8px] hover:cursor-pointer rounded-sm font-semibold text-purple-500 hover:text-white hover:bg-purple-700 hover:font-medium transition-all duration-200 ease-in"
            id ='${lang}'
            >${lang}</span
          >`;
            })
            .join("")}
          ${user.tools
            .map((tool, i) => {
              return `  <span
            class="bg-purple-100 p-[4px] text-[8px] hover:cursor-pointer rounded-sm font-semibold text-purple-500 hover:text-white hover:bg-purple-700 hover:font-medium transition-all duration-200 ease-in"
           id ='${tool}'
            >${tool}</span
          >`;
            })
            .join("")}
            
            </div>
            </div>`;

  workplace.appendChild(content);
}

const all = [
  "Frontend",
  "Junior",
  "JavaScript",
  "React",
  "Sass",
  "Frontend",
  "Junior",
  "JavaScript",
  "React",
  "Sass",
  "Sass",
  "Fullstack",
  "Midweight",
  "Python",
  "React",
  "Frontend",
  "Junior",
  "JavaScript",
  "React",
  "Sass",
  "Fullstack",
  "Midweight",
  "JavaScript",
  "Python",
  "Django",
];

const unique = [...new Set(all)];
