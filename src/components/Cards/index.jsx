import React from "react";
import UIText from "components/UI/Text";
import Box from "layout/Box";
import Grid from "layout/Grid";

import { FontAwesome5 } from "@expo/vector-icons";
import Paper from "layout/Paper";

export default function Card({
	dateEnds,
	dateStarts,
	timeEnds,
	timeStarts,
	title,
}) {
	return (
		<Paper elevation={4}>
			<Grid container>
				<Grid item xs={10}>
					<Box p=".3rem">
						<Grid container>
							<Grid item xs={10}>
								<UIText size="18px">
									{String(title).toUpperCase()}
								</UIText>
							</Grid>
							<Grid item xs={5}>
								<Box mt="1rem">
									<Grid container>
										<Grid item>
											<FontAwesome5
												size={20}
												color="#555"
												name="clock"
											/>
										</Grid>
										<Grid item>
											<Box pl=".3rem">
												<Grid container>
													<Grid item>
														<UIText size="18px">
															{new Date(
																timeStarts || null
															).toLocaleTimeString("pt-BR", {
																hour: "2-digit",
																minute: "2-digit",
															})}
														</UIText>
													</Grid>
													<Grid item>
														<Box m="0 0.5rem">
															<UIText size="18px">-</UIText>
														</Box>
													</Grid>
													<Grid item>
														<UIText size="18px">
															{new Date(
																timeEnds || null
															).toLocaleTimeString("pt-BR", {
																hour: "2-digit",
																minute: "2-digit",
															})}
														</UIText>
													</Grid>
												</Grid>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</Grid>
							<Grid item xs={5}>
								<Box mt="1rem">
									<Grid container>
										<Grid item>
											<FontAwesome5
												size={20}
												color="#555"
												name="calendar-week"
											/>
										</Grid>
										<Grid item>
											<Box pl=".3rem">
												<Grid container>
													<Grid item>
														<UIText size="18px">
															{new Date(
																dateStarts || null
															).toLocaleDateString("pt-BR", {
																day: "2-digit",
																month: "2-digit",
																year: "numeric",
															})}
														</UIText>
													</Grid>
													<Grid item>
														<Box m="0 0.5rem">
															<UIText size="18px">-</UIText>
														</Box>
													</Grid>
													<Grid item>
														<UIText size="18px">
															{new Date(
																dateEnds || null
															).toLocaleDateString("pt-BR", {
																day: "2-digit",
																month: "2-digit",
																year: "numeric",
															})}
														</UIText>
													</Grid>
												</Grid>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}
