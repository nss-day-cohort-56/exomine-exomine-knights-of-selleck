import { Governors } from "./Governors.js";
import { Facilities } from "./Facilities.js";
import { FacilityMinerals } from "./FacilityMinerals.js";
import { ColonyMinerals } from "./ColonyMinerals.js";

export const Exomine = () => {
  return `
    <div class="container">
      <h2>Solar System Mining Marketplace</h2>

      <div class="row">
        <div class="col-5">
          <div class="row">
            <div class="col-12">
              ${Governors()}
            </div>
          </div><!-- row -->

          <div class="row">
            <div class="col-12">
              ${Facilities()}
            </div>
          </div><!-- row -->
        </div><!-- col -->
              
        <div class="col-7">
        ${ColonyMinerals()}
        </div>
      </div><!-- row -->
      

      <div class="row">
        <div class="col-9">
          ${FacilityMinerals()}
        </div>

        <div class="col-3">
          <h3>Cart</h3>
        </div>
      </div><!-- row -->
    </div><!-- container -->
  `;
};
