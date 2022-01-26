import React from 'react';
import getTokenBody from "../../utils/decodeToken";

function CheckAccess({ role, children }) {
  const tokenBody = getTokenBody();
  if (tokenBody?.roles.includes(role)) {
    return children;
  }
  return null;
}

export default CheckAccess;