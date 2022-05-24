import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  TitleBanner,
  TitleText,
  FilterBox,
  FilterButton,
  Banner
} from "../Style/HeadingBannerStyles";


const HeadingBanner = ({ term, type, loading, filter }) => {

  return (
    <>
      {loading ? (
        " "
      ) : (
        <>
          <Banner>
            <TitleBanner>
              <TitleText>
                {filter ? (`${type}/ ${filter}`) : (` ${type}`)}

              </TitleText>

            </TitleBanner>

          </Banner>
        </>
      )
      }
    </>
  );
};

export default HeadingBanner;
