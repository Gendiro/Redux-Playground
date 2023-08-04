import * as UserActionCreators from "./todo";
import * as TodoActionCreators from "./user";
import * as NavActionCreators from "./nav";

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...NavActionCreators,
};
