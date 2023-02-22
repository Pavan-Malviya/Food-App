import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;


    const [restaurantmenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=20.7131695&lng=76.5650829&menuId=" + id);
        const json = await data.json();
        console.log(json);
        setRestaurantMenu(json.data);

    }


    return (!restaurantmenu) ? <Shimmer /> : (
        <div>
            <div className="restaurant-menu">
                <div className="menu1">
                    <h1>Restaurant id:{id}</h1>
                    <h2>{restaurantmenu.name}</h2>
                    <img src={IMG_CDN_URL + restaurantmenu.cloudinaryImageId} />
                    <h3>{restaurantmenu.area}</h3>
                    <h3>{restaurantmenu.city}</h3>
                    <h3>{restaurantmenu.costForTwoMsg}</h3>

                    <h3>{restaurantmenu.avgRating} Star </h3>
                </div>
                <div className="menu">
                    <h1>Menu</h1>
                    <ul>
                        {
                            Object.values(restaurantmenu.menu.items).map((item) => <li key={item.id}>{item.name}</li>)
                        }
                    </ul>

                </div>


            </div>

        </div>
    );
};

export default RestaurantMenu;