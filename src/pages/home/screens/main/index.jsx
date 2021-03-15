import React, { useEffect, useState } from "react";

import Box from "layout/Box";
import Grid from "layout/Grid";
import Paper from "layout/Paper";
import UIText from "components/UI/Text";
import Card from "components/Cards";

import { FontAwesome5 } from "@expo/vector-icons";

import { useSelector } from "react-redux";

export default function MainHomeScreen() {
	const items = useSelector((state) => state.items);

	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const parsedItems = items.filter(
			(item) =>
				new Date(item.dateStarts).getTime() >=
					new Date(Date.now()).getTime() ||
				(new Date(item.dateStarts).getTime() <
					new Date(Date.now()).getTime() &&
					new Date(item.dateEnds).getTime() >=
						new Date(Date.now()).getTime())
		);
		setTasks(parsedItems);
	}, [items]);

	return (
		<Box p="1rem">
			<Grid container>
				<Grid item xs={10} container justify="center">
					<UIText size="20px" color="var(--primary)" weight={500}>
						Bem vindo ao Agenda Agora!!
					</UIText>
				</Grid>
				<Grid item xs={10} container>
					<Grid item xs={5}>
						<Box p="1rem">
							<Paper elevation={3}>
								<Grid
									container
									alignItems="center"
									justify="space-between"
								>
									<Grid item>
										<UIText size="16px">Tarefas (Total):</UIText>
									</Grid>
									<Grid item container>
										<UIText
											size="20px"
											color="var(--primary)"
											weight={500}
										>
											{`${items.length}&nbsp;`}
										</UIText>
										<FontAwesome5
											size={20}
											color="#555"
											name="calendar-alt"
										/>
									</Grid>
								</Grid>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={5}>
						<Box p="1rem">
							<Paper elevation={3}>
								<Grid
									container
									alignItems="center"
									justify="space-between"
								>
									<Grid item>
										<UIText size="16px">Tarefas para hoje:</UIText>
									</Grid>
									<Grid item container>
										<UIText
											size="20px"
											color="var(--primary)"
											weight={500}
										>
											{`${tasks.length}&nbsp;`}
										</UIText>
										<FontAwesome5
											size={20}
											color="#555"
											name="calendar-day"
										/>
									</Grid>
								</Grid>
							</Paper>
						</Box>
					</Grid>
				</Grid>
				<Grid item xs={10}>
					<Box p="1rem">
						<UIText color="var(--primary)" weigh={500} size="22px">
							Tarefas para hoje
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
