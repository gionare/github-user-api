import React, { useState, useEffect } from "react";

interface UserType {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
}

export default function GitHubCard() {
  return <div>GitHubCard</div>;

  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
    <img className="w-full rounded-full" src={user?.avatar_url} alt={`${user?.login}'s avatar`} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{user?.name}</div>
      <p className="text-gray-700 text-base">@{user?.login}</p>
      <p className="text-gray-700 text-base">{user?.bio}</p>
    </div>
  </div>;
}
