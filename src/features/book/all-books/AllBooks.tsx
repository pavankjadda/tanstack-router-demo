import { Grid, Paper } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { BookService } from '../../../services/BookService';
import { Link } from '@tanstack/react-router';

export default function AllBooks() {
	const { data: books, isLoading } = useQuery({
		queryKey: ['books'],
		queryFn: () => BookService.getAllBooks(),
	});

	return (
		<Grid container size={12} className="custom-flex-justify-center" sx={{ mt: 3 }}>
			<Grid size={{ lg: 11, xl: 11 }}>
				<Paper elevation={24} style={{ marginTop: '30px' }}>
					<h2 className={'custom-flex-justify-center'}>All Books</h2>
					<div style={{ display: 'flex', height: '100%' }}>
						<div style={{ flexGrow: 1 }}>
							<DataGrid
								initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
								getRowId={(row) => row.id}
								pageSizeOptions={[10, 20, 50, 100]}
								disableRowSelectionOnClick={true}
								density={'comfortable'}
								loading={isLoading}
								rows={books ?? []}
								columns={columns}
							/>
						</div>
					</div>
				</Paper>
			</Grid>
		</Grid>
	);
}

/**
 * Table Columns
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
const columns: GridColDef[] = [
	{
		field: 'id',
		headerName: 'ID',
		flex: 1,
		renderCell: (params: GridCellParams) => (
			<Link to={`/book/$id`} params={{ id: params.row['id'] }}>
				{params.row['id']}
			</Link>
		),
	},
	{ field: 'title', headerName: 'Title', flex: 2.5 },
	{ field: 'isbn', headerName: 'ISBN', flex: 2.5 },
	{ field: 'author', headerName: 'Author', flex: 2.5 },
];
