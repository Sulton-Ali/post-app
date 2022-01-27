import React from 'react';
import getTokenBody from "../../utils/decodeToken";

function CheckAccess({ roles, children }) {
  const tokenBody = getTokenBody();
  let haveAccess = false;
  roles.forEach(role => {
    if (tokenBody?.roles.includes(role)) {
      haveAccess = true;
    }
  })
  if (haveAccess) {
    return children;
  }
  return null;
}

export default CheckAccess;