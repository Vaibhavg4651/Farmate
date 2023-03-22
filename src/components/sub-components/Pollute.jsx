import React from "react";
import "../../styles/Help.css";

const Pollute = () => {
  return (
    <div className="pollution">
      <div className="pollute">
        <h2>Major Issues</h2><br/>
        <h4>Pollution caused by Farmers</h4>
        <ul>
          <li>
            Fertilizer and pesticide runoff: Excessive use of fertilizers and
            pesticides can lead to the contamination of nearby water bodies.
            When it rains, these chemicals can runoff into rivers, streams, and
            other water bodies, which can harm aquatic life and affect water
            quality.
          </li>
          <br></br>
          <li>
            Soil erosion: Improper land use and management practices can lead to
            soil erosion. When soil is eroded, it can contaminate nearby water
            bodies and cause sedimentation, which can harm aquatic life.
          </li>
          <br></br>
          <li>
            Livestock waste: Large-scale livestock operations can produce a
            significant amount of waste that can pollute nearby water bodies if
            not managed properly. Animal waste contains high levels of nitrogen
            and phosphorus, which can cause eutrophication and harm aquatic
            life.
          </li>
          <br></br>
          <li>
            Air pollution: Agricultural practices such as burning crop residues
            and using heavy machinery can contribute to air pollution, which can
            have health effects on nearby communities.
          </li>
          <br></br>
          <li>
            Use of fossil fuels: Farmers may use fossil fuels to power machinery
            and transport goods, which can contribute to greenhouse gas
            emissions and air pollution.
          </li>
        </ul>
      </div>

      <div className="polute">
        <h2>Our Target</h2><br/>
        <p>
          One of the main cause that we specifically target is{" "}
          <strong>STUBBLE BURNING</strong>.<br />
          Agricultural fires are to blame for about half of the pollution experienced in Delhi in October and November, a peak stubble burning season in Punjab, a Harvard study has found using satellite data from NASA.
          Stubble burning involves intentionally setting fire to the remaining
          straw after harvesting rice, wheat and other grains. It is not edible
          for humans and also not a very good source of fodder for cattle hence
          has to be removed from the field for the next crop cycle. <a style={{"color":"rgb(60,60,60)"}} href="https://www.livemint.com/Science/bux7XCKB9oPFcSFXLkgefI/Stubble-burning-doubles-Delhi-pollution-Harvard-study.html">Read more...</a>
        </p>
        <br />
        <h4>There are many harmful effects of this practice : </h4>
        <ul>
          <li>loss of nutrients of the soil degrading the soil quality</li>
          <li>
            pollution caused by the smoke on burning the leftovers which also
            include greenhouse gases which cause the ozone layer depletion
          </li>
          <li>risk of widespread uncontrolled fires</li>
        </ul>
      </div>
    </div>
  );
};

export default Pollute;
