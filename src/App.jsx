const fetcher = (...args) => fetch(...args).then((res) => res.json());

import useSWR from "swr";
import { Button } from "./components/ui/button";

function Profile() {
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/users/Anton4k12",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  // render data
  return (
    <div className="border rounded-md flex p-4 w-fit gap-4 items-center shadow">
      <img className="size-20 rounded-full" src={data.avatar_url}></img>
      <div className="flex flex-col">
        <div className="font-bold text-xl">{data.name}</div>
        <Button asChild size="xs">
          <a href={data.html_url} target="_blank">
            Go to profile
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Profile;
