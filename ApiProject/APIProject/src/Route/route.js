
import { StackNavigator } from "react-navigation"

import AllData from "../AllData"
import EditData from "../EditRecord"






const Route = StackNavigator({

    AllDataRoute: { screen: AllData },
    EditDataRoute: { screen: EditData }

})


export default Route 