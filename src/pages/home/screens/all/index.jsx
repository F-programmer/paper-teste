import React from "react";

import Box from "layout/Box";
import Grid from "layout/Grid";
import UIText from "components/UI/Text";
import Card from "components/Cards";

import { useSelector } from "react-redux";

export default function MainHomeScreen() {
	const tasks = useSelector((state) => state.items);

	return (
		<Box p="1rem">
			<Grid container>
				<Grid item xs={10}>
					<Box p="1rem">
						<UIText color="var(--primary)" weigh={500} size="22px">
							{`Todas as tarefas: ${tasks.length}`}
						</UIText>
						<Grid container>
							{tasks.map((item) => (
								<Grid item xs={10}>
									<Box mb="1rem">
										<Card {...item} />
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
