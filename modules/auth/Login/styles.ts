import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    color: "#008236",
    fontWeight: "600",
    fontSize: 28,
    marginBottom: 10,
  },
  headerSubtitle: {
    color: "#008236",
    fontWeight: "600",
    fontSize: 24,
  },
  inputsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderColor: "#111",
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    width: "100%",
    marginBottom: 20,
  },
  buttonEnabled: {
    backgroundColor: "#008236",
    opacity: 1,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    opacity: 0.6,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  footerText: {
    color: "#008236",
    fontSize: 14,
  },
  linkText: {
    color: "#008236",
    fontSize: 14,
    fontWeight: "600",
  },
});
