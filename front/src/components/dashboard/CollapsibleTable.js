import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(isLate, nome, etapa) {
  return {
    isLate,
    nome,
    etapa,
    more: [
      {
        codigo: 'b123',
        quantidade: 3,
        duracao: 3,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
            <div className={"rounded p-2 w-50 text-center fw-bold text-white text-uppercase text-nowrap overflow-hidden " + "bg-success"}>
                {row.isLate}
            </div>
        </TableCell>
        <TableCell align="left">{row.nome}</TableCell>
        <TableCell align="right">{row.etapa}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Mais Informações
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Código do Produto</TableCell>
                    <TableCell>Quantidade</TableCell>
                    <TableCell align="right">Duração da etapa atual (Dias) </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.more.map((moreRow) => (
                    <TableRow key={moreRow.codigo}>
                      <TableCell component="th" scope="row">
                        {moreRow.codigo}
                      </TableCell>
                      <TableCell>{moreRow.quantidade}</TableCell>
                      <TableCell align="right">{moreRow.duracao}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    status: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    etapa: PropTypes.string.isRequired,
    more: PropTypes.arrayOf(
      PropTypes.shape({
        codigo: PropTypes.string.isRequired,
        quantidade: PropTypes.number.isRequired,
        duracao: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('Atrasado', 'Blusa', 'Corte'),
  createData('Em dia', 'Calça', 'Costura'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Status</TableCell>
            <TableCell align="left">Nome do Produto</TableCell>
            <TableCell align="right">Etapa Atual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}