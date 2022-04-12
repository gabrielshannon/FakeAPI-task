import React from "react";
import styles from "./PhotoGrid.module.scss";
import { useState, useEffect } from "react";

const PhotoGrid = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMyData(data);
      });
  }, []);

  return (
    <div className={styles.photoGrid}>
      <div class={styles.grid}>
        {myData &&
          myData.slice(0, 20).map((data) => {
            return (
              <div className={styles.item}>
                <div className={styles.cardFront}>
                  <div className={styles.imageFrame}>
                    <img src={data.url} alt="" />
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.tagBar}>
                      <div>{data.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PhotoGrid;
