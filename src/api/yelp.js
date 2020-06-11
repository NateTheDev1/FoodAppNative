// Client ID
// CBFNK9-wW99P39N9lJXnmw

// API Key
// zCNxY0jgFROaCwEDjUm0K-e9VlW_cASbM_dn3682yS-dtV4IziBjDPuiJN6Xqf3jJHI4y2VPZ_L-GkGTrPZ_8xCGJ0RdRfOUK-PnFlXnHEHU79lj6nh5riejzUHhXnYx

import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer zCNxY0jgFROaCwEDjUm0K-e9VlW_cASbM_dn3682yS-dtV4IziBjDPuiJN6Xqf3jJHI4y2VPZ_L-GkGTrPZ_8xCGJ0RdRfOUK-PnFlXnHEHU79lj6nh5riejzUHhXnYx",
  },
});
