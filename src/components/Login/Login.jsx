import { useEffect } from "react";
// imported from firebase auth sdk
import { getAuth } from "firebase/auth";
// ensures compatibility with the older versions of firebase
import firebase from "firebase/compat/app";
// imports pre-built UI for firebase authentication
import * as firebaseui from "firebaseui";
// imports the firebaseui styles using the CDN
import "firebaseui/dist/firebaseui.css";
import { app } from "../../utils/firebase";
export default function Login() {
    useEffect(() => {
        const ui =
            firebaseui.auth.AuthUI.getInstance() ||
            // since Firebase v9 and above service are imported when needed instad of being a namespace
            new firebaseui.auth.AuthUI(getAuth(app));

        ui.start("#firebaseui-auth-container", {
            signInSuccessUrl: "/home",
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    clientId:
                        "1066123912004-ior89rvsvemhvsk0c06sqrhs8lvrv6gu.apps.googleusercontent.com",
                },
            ],
            // required to enable one-tap sign-up credential helper
            credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        });
    }, []);

    return (
        <>
            <div className="text-2xl font-bold">Please sign in to check your late days</div>
            <div id="firebaseui-auth-container" className="mt-24"></div>
        </>
    );
}