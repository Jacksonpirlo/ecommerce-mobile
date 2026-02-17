import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    padding: 10,
    gap: 20,
  },
  headerText: {
    color: "#008236",
    fontWeight: "600",
    fontSize: 25,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    gap: 20,
    width: "70%",
  },
  input: {
    borderColor: "#111",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  buttonsContainer: {
    gap: 20,
    marginVertical: 30,
    alignItems: "center",
    width: "100%",
  },
  buttonPrimary: {
    backgroundColor: "#008236",
    padding: 10,
    borderRadius: 5,
    width: "70%",
  },
  buttonPrimaryDisabled: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "70%",
    opacity: 0.6,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
  buttonSecondary: {
    borderColor: "#008236",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "70%",
  },
  buttonSecondaryText: {
    textAlign: "center",
    color: "#008236",
  },
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
  },
  footerText: {
    color: "#008236",
  },
  linkText: {
    color: "#008236",
  },
});
