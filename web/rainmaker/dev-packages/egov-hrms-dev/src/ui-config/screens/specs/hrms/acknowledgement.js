import {
  getCommonHeader,
  getCommonContainer
} from "egov-ui-framework/ui-config/screens/specs/utils";
import { gotoHomeFooter } from "./acknowledgementResource/gotoHomeFooter";
import acknowledgementCard from "./acknowledgementResource/acknowledgementUtils";
import { getQueryArg } from "egov-ui-framework/ui-utils/commons";
import set from "lodash/set";

const goToHome = gotoHomeFooter();
const getAcknowledgementCard = (
  state,
  dispatch,
  purpose,
  status,
  applicationNumber,
  secondNumber,
  tenant
) => {
  if (purpose === "create" && status === "success") {
    return {
      header: getCommonContainer({
        header: getCommonHeader({
          labelName: `Create New Employee`
          // labelKey: "TL_TRADE_APPLICATION"
        })
      }),
      applicationSuccessCard: {
        uiFramework: "custom-atoms",
        componentPath: "Div",
        children: {
          card: acknowledgementCard({
            icon: "done",
            backgroundColor: "#39CB74",
            header: {
              labelName: "Employee Created Successfully",
              labelKey: "HR_CREATE_SUCCESS_MESSAGE"
            },
            body: {
              labelName:
                "A notification has been sent to the created Employee at registered Mobile No.",
              labelKey: "HR_CREATE_SUCCESS_SUBHEADER"
            },
            tailText: {
              labelName: "Employee ID",
              labelKey: "HR_EMP_ID_LABEL"
            },
            number: applicationNumber
          })
        }
      },
      goToHome
    };
  } else if (purpose === "update" && status === "success") {
    return {
      header: getCommonContainer({
        header: getCommonHeader({
          labelName: `Update Employee`
          // labelKey: "TL_TRADE_APPLICATION"
        })
      }),
      applicationSuccessCard: {
        uiFramework: "custom-atoms",
        componentPath: "Div",
        children: {
          card: acknowledgementCard({
            icon: "done",
            backgroundColor: "#39CB74",
            header: {
              labelName: "Employee Updated Successfully",
              labelKey: "HR_UPDATE_SUCCESS_MESSAGE"
            },
            body: {
              labelName:
                "A notification has been sent to the Employee at registered Mobile No.",
              labelKey: "HR_UPDATE_SUCCESS_SUBHEADER"
            },
            tailText: {
              labelName: "Employee ID",
              labelKey: "HR_EMP_ID_LABEL"
            },
            number: applicationNumber
          })
        }
      },
      goToHome
    };
  } else if (purpose === "deactivate" && status === "success") {
    return {
      header: getCommonContainer({
        header: getCommonHeader({
          labelName: `Deactivated Employee`
          // labelKey: "TL_TRADE_APPLICATION"
        })
      }),
      applicationSuccessCard: {
        uiFramework: "custom-atoms",
        componentPath: "Div",
        children: {
          card: acknowledgementCard({
            icon: "done",
            backgroundColor: "#39CB74",
            header: {
              labelName: "Employee Deactivated Successfully",
              labelKey: "HR_DEACTIVATE_SUCCESS_MESSAGE"
            },
            body: {
              labelName:
                "A notification has been sent to the Employee at registered Mobile No.",
              labelKey: "HR_DEACTIVATE_SUCCESS_SUBHEADER"
            },
            tailText: {
              labelName: "Employee ID",
              labelKey: "HR_EMP_ID_LABEL"
            },
            number: applicationNumber
          })
        }
      },
      goToHome
    };
  }
};

const screenConfig = {
  uiFramework: "material-ui",
  name: "acknowledgement",
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "common-div-css"
      }
    }
  },
  beforeInitScreen: (action, state, dispatch) => {
    const purpose = getQueryArg(window.location.href, "purpose");
    const status = getQueryArg(window.location.href, "status");
    const applicationNumber = getQueryArg(
      window.location.href,
      "applicationNumber"
    );
    const secondNumber = getQueryArg(window.location.href, "secondNumber");
    const tenant = getQueryArg(window.location.href, "tenantId");
    const data = getAcknowledgementCard(
      state,
      dispatch,
      purpose,
      status,
      applicationNumber,
      secondNumber,
      tenant
    );
    set(action, "screenConfig.components.div.children", data);
    return action;
  }
};

export default screenConfig;
