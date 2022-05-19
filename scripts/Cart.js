import { getOrders, getFacilityById } from "./database.js";



export const Orders = () => {
    let listItemsString = "";
    const orders = getOrders()
  
  
      listItemsString += "<ul class='text-center no-bullets'>";
  
      const listItemsArray = orders.map((order) => {
        const facilityName = getFacilityById(order.facilityId).name  
        return `
          <li class="mt-0 order">
              1 ton of ${order.mineralName} from ${facilityName} 
          </li>`;
      });
  
      listItemsString += listItemsArray.join("");
  
      listItemsString += "</ul>";
    
    return listItemsString;
  };
