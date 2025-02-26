import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, styled, Button, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

// StyledTableCell for better styling control
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-head': {
      backgroundColor: '#afcef7', // Darker header background
      color: '#1350a0',
      fontWeight: 'bold',
      padding: '12px 16px', // Adjust padding
      textAlign: 'left', // Align text to the left
    },
    '&.MuiTableCell-body': {
      fontSize: 14,
      padding: '12px 16px', // Adjust padding
      textAlign: 'left', // Align text to the left
    },
  }));

const ReferralBenefits = ({ onOpenModal }) => {
  const allRows = [ // Store all rows in a separate variable
    { program: "Professional Certificate in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000", category: "PRODUCT MANAGEMENT" },
    { program: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000", category: "STRATEGY & LEADERSHIP" },
    { program: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "BUSINESS MANAGEMENT" },
    { program: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "SENIOR MANAGEMENT" },
    { program: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "SENIOR MANAGEMENT" },
    { program: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "DIGITAL TRANSFORMATION" },
    { program: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "BUSINESS ANALYTICS" },
    { program: "Professional Certificate in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000", category: "PRODUCT MANAGEMENT" },
    { program: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000", category: "STRATEGY & LEADERSHIP" },
    { program: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "BUSINESS MANAGEMENT" },
    { program: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "SENIOR MANAGEMENT" },
    { program: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "SENIOR MANAGEMENT" },
    { program: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "DIGITAL TRANSFORMATION" },
    { program: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000", category: "BUSINESS ANALYTICS" },
   ];

  const [rows, setRows] = useState(allRows.slice(0, 7)); // Initially display 7 rows
  const [showMore, setShowMore] = useState(false);

  const categories = [...new Set(allRows.map(row => row.category))];
  const [selectedCategory, setSelectedCategory] = useState("ALL PROGRAMS");

  const filteredRows = selectedCategory === "ALL PROGRAMS" ? allRows : allRows.filter(row => row.category === selectedCategory);
  const displayedRows = showMore ? filteredRows : filteredRows.slice(0, 7);



  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}> {/* Added background color and flex layout */}
    <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#212121', mt: 4 }}> {/* Darker heading color and margin top */}
      What Are The Referral Benefits?
    </Typography>
    <Box sx={{ display: 'flex', flexGrow: 1, px: 4 }}> {/* Added padding to the main content area */}
      <Box
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          backgroundColor: '#fff', // White background for the category list
          borderRight: '1px solid #e0e0e0', // Add a border to the right
        }}
      >
        <List>
          <ListItem key={"ALL PROGRAMS"} disablePadding>
            <ListItemButton onClick={() => { setSelectedCategory("ALL PROGRAMS"); setShowMore(false); setRows(allRows.slice(0, 7)) }}>
              <ListItemText primary={"ALL PROGRAMS"} sx={{ color: '#424242' }} /> {/* Darker text color */}
            </ListItemButton>
          </ListItem>
          {categories.map((category) => (
            <ListItem key={category} disablePadding>
              <ListItemButton onClick={() => { setSelectedCategory(category); setShowMore(false); setRows(allRows.filter(row => row.category === category).slice(0, 7)) }}>
                <ListItemText primary={category} sx={{ color: '#424242' }} /> {/* Darker text color */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Paper sx={{ padding: 3,  margin: '20px', flexGrow: 1, borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}> {/* Added box shadow and border radius */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Programs</StyledTableCell>
                <StyledTableCell>Referrer Bonus</StyledTableCell>
                <StyledTableCell>Referee Bonus</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRows.map((row) => (
                <TableRow key={row.program} hover> {/* Added hover effect */}
                  <StyledTableCell>{row.program}</StyledTableCell>
                  <StyledTableCell>{row.referrerBonus}</StyledTableCell>
                  <StyledTableCell>{row.refereeBonus}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 3}}>
          {!showMore && filteredRows.length > 7 && (
          <Button variant="text" color="primary" onClick={handleShowMore} sx={{ mt: 2 }}>
            Show More
          </Button>
        )}
        {showMore && (
          <Button variant="text" color="primary" onClick={handleShowLess} sx={{ mt: 2 }}>
            Show Less
          </Button>
        )}
        </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 4 }}> {/* Centered button, added margin bottom */}
        <Button variant="contained" color="primary" onClick={onOpenModal} sx={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', textTransform: 'none',  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}> {/* Styled button */}
          Refer Now
        </Button>
      </Box>
    </Box>
  );
};

export default ReferralBenefits;