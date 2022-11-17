import { ENDPOINT } from "../config/endpoints";
import { REST } from ".";

/**
 * To serve search results
 * @param request
 * @returns promise
 */

export const fetchSearchResults = (request?: {
  keyword?:string,
  page?:number,
  domain?:string,
  additionalParams?: any
}) => {
  console.log(request.additionalParams);
  if(request.additionalParams===null){
    delete request.additionalParams;
  }
  let parameters: any;
  if(request.additionalParams != null){
    parameters = {
      url: REST.processArgs(ENDPOINT.SEARCH_WITH_PERMISSIONS, request),
      method: "GET",
    };
  } else {
    parameters = {
      url: REST.processArgs(ENDPOINT.SEARCH, request),
      method: "GET",
    };
  }

  return REST.apiCal(parameters);
};

export const fetchSpecialNodes = (request?: any) => {
  const parameters = {
    url: REST.processArgs(ENDPOINT.SPECIAL_NODES, request),
    method: "GET",
  };
  const resp = {
    include: {
      tags: ["a", "button", "input", "textarea", "select", "mat-select"],
      classes: ["ng-select", "ngb-datepicker"],
    },
    exclude: {
      tags: [
        "link",
        "meta",
        "script",
        "svg",
        "style",
        "path",
        "circle",
        "g",
        "rect",
        "stop",
        "defs",
        "linearGradient",
      ],
      classes: ["uda_exclude", "ngx-daterangepicker-material"],
    },
  };
  // return REST.apiCal(parameters);
  return resp;
};
