import React from "react";
import {connect} from "react-redux";
import Test from "./Test";

let MapStateToProps  = (state) => ({
        text: state.test.text
})


export default connect (MapStateToProps)(Test);