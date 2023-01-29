import React, { useState } from "react";
import "material-symbols";
import Header from "../components/Header";
import ToggleTypes from "../components/ToggleTypes";
import ExpandableCard from "../components/ExpandableCard";
import FilterLabels from "../components/FilterLabels";

// initialize axios
import axios from "axios";
import { useEffect } from "react";
axios.defaults.baseURL = "http://127.0.0.1:8000/";

const Home = () => {
  const [discludeType, setDisculdeType] = useState([]);

  const [labels, setLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");

  const [results, setResults] = useState([]);

  const changeTypeOfResults = (event, newType) => {
    if (discludeType.includes(newType)) {
      setDisculdeType((prev) => prev.filter((a) => a !== newType));
    } else {
      setDisculdeType((prev) => [...prev, newType]);
    }
  };

  // this changes the stash results
  const changeResults = (label) => {
    setSelectedLabel(label);
    if (label) {
      axios
        .get(
          "stash/getStashesByUserByLabel/2/" +
            labels.find((l) => l.name == label).id +
            "/"
        )
        .then((res) => {
          var tempStashes = [];
          // "summary" "qna" "subsection"
          res.data.forEach((stash) => {
            if (stash.stash_type === "qna") {
              stash.question = stash.text.substring(
                0,
                stash.text.indexOf(`\n`)
              );
              stash.text = stash.text.substring(stash.text.indexOf(`\n`));
            }
            tempStashes.push(stash);
          });
          setResults(tempStashes);
          console.log(res.data);
        });
    } else {
      axios
        .get("stash/getStashesByUser/2/")
        .then((res) => {
          var tempStashes = [];
          // "summary" "qna" "subsection"
          res.data.forEach((stash) => {
            if (stash.stash_type === "qna") {
              stash.question = stash.text.substring(
                0,
                stash.text.indexOf(`\n`)
              );
              stash.text = stash.text.substring(stash.text.indexOf(`\n`));
            }
            tempStashes.push(stash);
          });
          setResults(tempStashes);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    axios
      .get("label/getLabels/2/")
      .then((res) => {
        var tempLabels = [];
        res.data.forEach((label) => {
          tempLabels.push(label);
        });
        setLabels(tempLabels);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    changeResults(null);
  }, []);

  return (
    <>
      <Header right="logout" />
      <div id="home-content">
        <ToggleTypes
          changeTypeOfResults={changeTypeOfResults}
          discludeType={discludeType}
        />
        <FilterLabels
          labels={labels}
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
          changeResults={changeResults}
        />
        <div id="card-container">
          {results.map((result) => {
            if (discludeType.includes(result.stash_type)) {
              return null;
            }

            return (
              <ExpandableCard
                text={result.text}
                url={result.url}
                stash_type={result.stash_type}
                labels={result.labels.map((label) => {
                  return labels[label - 1].name;
                })}
                question={result.question ? result.question : null}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
