import { Redirect } from "expo-router";
import React from "react";

export default function AppStack() {
	return (
		<Redirect
			href={'/onboarding'}
		/>
	)
}
