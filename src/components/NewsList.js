import React, { useState } from "react";
import News from "./News";
import useFetch from "../CustomHooks/apiFetch";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_LIST } from "../Redux/types";
import { useParams } from "react-router-dom";

const NewsList = ({ type }) => {
  const { isLoading, stories = [] } = useFetch("new");
  const [saveStory, setSaveStory] = useState([]);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.configReducer.starred);

  console.log("state", type);

  console.log("stories", stories);

  const getSaveStory = (story) => {
    dispatch({
      type: SAVE_LIST,
      payload: story,
    });

    console.log("story", state);
  };
  return (
    <>
      {type === "latest" ? (
        <ol>
          {stories?.map((story) =>
            story ? (
              <li key={story.id} onClick={() => getSaveStory(story)}>
                <News story={story} />
              </li>
            ) : (
              <div className="loading">Loading....</div>
            )
          )}
        </ol>
      ) : (
        <ol>
          {state?.map((story) =>
            story ? (
              <li key={story.id} onClick={() => getSaveStory(story)}>
                <News story={story} />
              </li>
            ) : (
              <div className="loading">Loading....</div>
            )
          )}
        </ol>
      )}
    </>
  );
};

export default NewsList;
