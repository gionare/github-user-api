import { useEffect, useState } from "react";
import "./App.css";

interface UserType {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  company: string | null;
  hireable: boolean | null;
  twitter_username: string | null;
}

function App() {
  const [user, setUser] = useState<UserType | undefined>();
  const [search, setSearch] = useState<string | null>("gionare");

  useEffect(() => {
    getUser();
  }, [search]);

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const jsonData = await response.json();
      setUser(jsonData);
    } catch (error) {}
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <>
      <header className="flex flex-row justify-between">
        <h1 className="m-5 ">devfinder</h1>
      </header>

      <search className="flex flex-row rounded-xl overflow-hidden shadow-lg m-4 p-4 bg-custom-blue ">
        <img src="./assets/icon-search.svg" alt="Search icon" className="w-[30px] h-[30px] my-auto mx-4" />
        <input
          className=" m-4 p-2 flex-grow  rounded bg-transparent text-white placeholder-gray-400"
          placeholder="Search Github Username..."
          type="text"
          name="login"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className="ml-auto"
          onClick={() => {
            console.log("ragaca");
            getUser();
          }}
        >
          Search
        </button>
      </search>

      <main className="rounded-xl overflow-hidden shadow-lg m-4 p-4 bg-custom-blue flex flex-row w-[750px] h-[420px]">
        <img className="w-120 h-120 rounded-full m-5" src={user?.avatar_url} alt={`${user?.login}'s avatar`} />
        <div className="px-6 py-4">
          <div className="flex flex-row justify-between">
            <h2>Name: {user?.name || "Empty"}</h2>
            <span>Joined {user?.created_at ? formatDate(user.created_at) : "Empty"} </span>
          </div>
          <div className="flex">
            <span className="text-sky-600 justify-start"> {user?.login || "Empty"}</span>
          </div>
          <div className="flex my-3">
            <span className=" justify-start">{user?.bio || "This profile has no bio"}</span>
          </div>
          <div className="bg-custom-bg-blue flex flex-row justify-between p-5 my-6 rounded-xl">
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold">Repos</span>
              <span className="text-white text-lg font-bold">{user?.public_repos || "0"}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold">Followers</span>
              <span className="text-white text-lg font-bold">{user?.followers || "0"}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold">Following</span>
              <span className="text-white text-lg font-bold">{user?.following || "0"}</span>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="flex flex-row">
              <img src="/assets/icon-location.svg" alt="" className="w-[20px] h-[20px] mr-2" />
              <span className="text-white">{user?.location || "N/A"}</span>
            </div>
            <div className="flex flex-row">
              <img src="/assets/icon-website.svg" alt="" className="w-[20px] h-[20px] mr-2" />
              <a
                href={user?.blog || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                {user?.blog || "N/A"}
              </a>
            </div>
            <div className="flex flex-row">
              <img src="public/assets/icon-company.svg" alt="" className="w-[20px] h-[20px] mr-2" />
              <span className="text-white">{user?.company || "N/A"}</span>
            </div>
            <div className="flex flex-row">
              <div>
                <img src="public/assets/react.svg" alt="" className="w-[20px] h-[20px] mr-2" />
              </div>
              <span className="mr-1">Hireable: </span>
              <span className="text-white">{user?.hireable ? "Yes" : "No"}</span>
            </div>
            <div className="flex flex-row">
              <img src="public/assets/icon-twitter.svg" alt="" className="w-[20px] h-[20px] mr-2" />
              <span className="text-white">{user?.twitter_username || "N/A"}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
