import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useUserInfo from "../hooks/useUserInfo";
import SideBar from "../components/sideBar";
import TweetCard from "../components/tweetCard";
import TweetPostForm from "../components/tweetPostForm";
import TopNavLink from "../components/topNav";
import TweetEditForm from "../components/tweetEditForm";

import axios from "axios";

export default function TweetPage() {
	// get userId from login function
	//   ***** todo: implement login for user id *****
	// hard code a user
	const currentUserId = "6443522ef0780a89f347dc72";
	// hard code login status
	const [isLogin, setLogin] = useState(true);
	const { tweetId } = useParams();
	// const [isEdit, setIsEdit] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [tweet, setTweet] = useState(null);
	const [tweetInfoStatus, setTweetInfoStatus] = useState("loading");
	const navigate = useNavigate();

	// for current login user info
	const {
		userInfo,
		setUserInfo,
		status: userInfoStatus,
	} = useUserInfo(currentUserId);

	// get tweet info
	useEffect(() => {
		if (!tweetId) {
			return;
		}
		axios.get("/api/tweets/" + tweetId).then((response) => {
			setTweet(response.data);
			setTweetInfoStatus("pass");
		});
	}, [tweetId]);

	if (userInfoStatus === "loading" || tweetInfoStatus === "loading") {
		return "";
	}

	const isMyTweet = tweet?.author === userInfo?._id;

	// delete current tweet
	async function deleteTweet() {
		await axios.delete("/api/tweets/" + tweetId).then(function (response) {
			let path = "/";
			navigate(path);
		});
	}

	// navigate to edit page
	function updateTweet() {
		setEditMode(true);
	}

	// cancel the update
	function cancelUpdate() {
		setEditMode(false);
	}

	// http://localhost:3000/tweet/643fa08b70e1182c4f02e300 test url

	return (
		<div className="h-screen bg-slate-400 flex flex-row">
			{/* sidebar */}
			<SideBar curUser={userInfo} isLogin={isLogin} />
			{/* main feed */}
			<div className="flex-1 bg-white border-x-2 overflow-y-scroll">
				<div className="px-5 py-2 flex justify-between">
					<TopNavLink />
					{/* <div className="flex-l"></div> */}
					{isMyTweet && (
						<div className="flex">
							{!editMode && (
								<div>
									<button
										className=" bg-blue-500 rounded-full w-20 text-white hover:bg-blue-400"
										onClick={updateTweet}
									>
										Edit
									</button>
									<button
										className="bg-red-500 rounded-full w-20 text-white hover:bg-red-400"
										onClick={deleteTweet}
									>
										Delete
									</button>
								</div>
							)}

							{editMode && (
								<button
									className=" bg-slate-500 rounded-full w-20 text-white hover:bg-slate-400"
									onClick={cancelUpdate}
								>
									Cancel
								</button>
							)}
						</div>
					)}
				</div>
				{editMode && (
					<TweetEditForm
						curUser={userInfo}
						placeholder={tweet.text}
						tweetId={tweet._id}
					/>
				)}
				{!editMode && <TweetCard tweet={tweet} isDetail={true} />}
			</div>
		</div>
	);
}
