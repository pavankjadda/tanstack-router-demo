import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq(): React.JSX.Element {
	return (
		<Card elevation={24} className={'container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10'}>
			<CardContent>
				<h3 className={'custom-flex-justify-center'}>Frequently Asked Questions</h3>
				<Divider />

				<div style={{ marginTop: '30px' }}>
					<Accordion expanded={true}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
							<Typography style={{ fontWeight: 'bolder' }}>What is Tanstack Router Demo?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Tanstack Router Demo is a web application built on React</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={true}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
							<Typography style={{ fontWeight: 'bolder' }}>How do I login to Tanstack Router Demo?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Go to Login page, enter your username and password and click Login.</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={true}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
							<Typography style={{ fontWeight: 'bolder' }}>What browsers are supported?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'span'}>
								Tanstack Router Demo supports following browsers
								<ul>
									<li>Google Chrome</li>
									<li>Mozilla Firefox</li>
									<li>Microsoft Edge</li>
									<li>Safari on macOS</li>
									<li>Chromium browsers like Brave, Opera and Vivaldi</li>
								</ul>
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={true}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
							<Typography style={{ fontWeight: 'bolder' }}>I am new to Tanstack Router Demo, whom should I contact for access?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Contact Tanstack Router Demo support by clicking on <b> Need Assistance </b>button present at bottom of the every page
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</CardContent>
		</Card>
	);
}
