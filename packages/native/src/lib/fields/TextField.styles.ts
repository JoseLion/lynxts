import { StyleSheet } from "react-native";

enum Color {
  INDIAN_RED = "#CD5C5C",
  OUTER_SPACE = "#414A4C",
}

export const SS = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  error: {
    color: Color.INDIAN_RED,
    fontSize: 12,
    marginLeft: 2,
    marginTop: 2,
  },
  input: {
    borderColor: Color.OUTER_SPACE,
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 2,
    color: Color.OUTER_SPACE,
    fontSize: 14,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  inputError: {
    borderColor: Color.INDIAN_RED,
  },
  labelText: {
    color: Color.OUTER_SPACE,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
    marginLeft: 2,
  },
  labelView: {
    flexDirection: "row",
  },
  sup: {
    fontSize: 10,
    lineHeight: 10,
  },
});
