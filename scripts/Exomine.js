import { Facilities } from "./Facilities.js";
import { Governors } from "./Governors.js";

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
          <h3>Colony Minerals</h3>
        </div>
      </div><!-- row -->
      

      <div class="row">
        <div class="col-9">
          <h4>Facility Minerals</h4>
        </div>

        <div class="col-3">
          <h4>Cart</h4>
        </div>
      </div><!-- row -->
    </div><!-- container -->
  `;
};
