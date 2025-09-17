import React from 'react';

/**
 * PUBLIC_INTERFACE
 * MigrationLogs
 * Shows a list of recent migration logs (placeholder data).
 * This component dynamically generates the table headers and columns based on the
 * keys present in the first log entry, so it automatically adapts to changes in data shape.
 * - Headers are humanized from snake_case or camelCase.
 * - Null/empty values are shown as '-'.
 * - Long text gets truncation and tooltips.
 * - Status fields render as colored badges.
 * - Layout remains responsive and preserves zebra striping and hover states.
 */
function MigrationLogs() {
  const logs = [
    {
        "oscr_request_number": 1511,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1521,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1528,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1551,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1588,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1600,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1649,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1667,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1676,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1718,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1729,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1744,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1759,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1816,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1850,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1883,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1886,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1909,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1915,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1933,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1936,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1959,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1999,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2002,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2086,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2141,
        "jira_issue_key": null,
        "oscr_status": "cancelled",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1503,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1504,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1505,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1506,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1507,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1514,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1517,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1518,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1520,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1526,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1530,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1531,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1532,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1533,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1535,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1538,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1539,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1541,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1542,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1543,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1545,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1546,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1547,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1548,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1549,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1550,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1553,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1554,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1555,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1556,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1558,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1559,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1560,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1561,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1562,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1564,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1565,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1566,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1567,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1568,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1569,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1570,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1571,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1572,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1575,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1576,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1577,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1579,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1580,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1581,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1582,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1583,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1584,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1585,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1586,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1587,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1589,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1590,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1591,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1592,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1593,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1594,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1596,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1599,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1601,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1602,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1603,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1604,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1605,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1606,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1607,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1610,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1612,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1613,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1614,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1615,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1616,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1618,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1619,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1620,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1621,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1622,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1624,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1625,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1628,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1629,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1630,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1631,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1632,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1633,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1634,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1635,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1636,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1637,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1640,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1641,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1642,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1643,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1644,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1645,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1646,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1650,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1654,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1655,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1656,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1660,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1661,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1662,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1663,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1664,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1665,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1666,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1669,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1673,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1674,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1675,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1677,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1678,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1679,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1680,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1682,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1684,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1685,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1687,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1689,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1690,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1693,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1694,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1695,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1697,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1698,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1699,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1700,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1701,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1703,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1704,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1705,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1706,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1711,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1712,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1713,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1714,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1715,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1716,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1720,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1721,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1723,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1724,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1726,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1730,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1732,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1736,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1737,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1745,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1746,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1747,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1748,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1749,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1750,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1752,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1753,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1754,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1755,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1757,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1758,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1760,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1762,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1764,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1765,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1767,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1768,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1769,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1770,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1772,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1773,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1774,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1776,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1777,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1778,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1779,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1780,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1782,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1783,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1786,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1787,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1791,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1792,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1793,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1794,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1795,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1796,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1797,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1800,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1801,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1802,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1803,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1804,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1807,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1808,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1809,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1811,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1812,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1813,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1815,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1821,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1825,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1828,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1829,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1830,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1831,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1832,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1833,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1834,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1835,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1839,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1841,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1842,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1845,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1848,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1851,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1853,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1855,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1856,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1857,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1860,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1861,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1862,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1863,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1864,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1866,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1867,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1868,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1869,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1870,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1871,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1872,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1873,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1874,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1875,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1876,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1880,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1887,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1888,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1890,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1894,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1896,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1897,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1904,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1905,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1906,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1907,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1908,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1914,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1916,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1918,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1919,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1921,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1922,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1923,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1930,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1931,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1934,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1935,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1940,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1941,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1944,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1947,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1948,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1949,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1950,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1951,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1953,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1955,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1956,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1957,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1960,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1962,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1964,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1967,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1969,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1970,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1971,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1973,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1974,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1976,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1980,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1983,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1985,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1986,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1988,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1989,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1991,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1992,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1997,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 1998,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2000,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2001,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2003,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2004,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2007,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2012,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2013,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2014,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2015,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2018,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2019,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2023,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2024,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2025,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2026,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2027,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2029,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2030,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2031,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2032,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2033,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2040,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2041,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2042,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2043,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2044,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2045,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2046,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2047,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2048,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2049,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2050,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2051,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2054,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2056,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2057,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2058,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2059,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2060,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2061,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2062,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2065,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2069,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2070,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2071,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2072,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2075,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2080,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2085,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2087,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2090,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2091,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2093,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2095,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2100,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2101,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2104,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2106,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2108,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2111,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2112,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2114,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2115,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2116,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2117,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2123,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2124,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2127,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2128,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2129,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2130,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2131,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2136,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2137,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2138,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2145,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2146,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2149,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2150,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2152,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2153,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2154,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2158,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2159,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2160,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2161,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2163,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2164,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2166,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2167,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2169,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2170,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2171,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2172,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2178,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2179,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2181,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2182,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2184,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2187,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2189,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2190,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2191,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2193,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2194,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2195,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2197,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2198,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2199,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2202,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2211,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2215,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2232,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    },
    {
        "oscr_request_number": 2242,
        "jira_issue_key": null,
        "oscr_status": "approved",
        "comments": null,
        "jira_issue_transition": null,
        "error": null
    }
];

  // Helper: determine if a value is empty (null/undefined/empty string)
  const isEmpty = (v) => v === null || v === undefined || (typeof v === 'string' && v.trim() === '');

  // Helper: safe display formatting with null/empty fallback
  const formatValue = (v) => (isEmpty(v) ? '-' : String(v));

  // Helper: humanize field keys for headers (snake_case, camelCase -> Title Case)
  const humanizeKey = (key) => {
    if (!key) return '';
    const lower = key.toLowerCase();
    // Special labels
    const special = {
      oscr_request_number: 'OSCR Request #',
      oscr_status: 'OSCR Status',
      jira_issue_key: 'JIRA Issue Key',
      jira_issue_transition: 'JIRA Transition',
      id: 'ID',
      uuid: 'UUID'
    };
    if (special[lower]) return special[lower];

    // Convert snake and camelCase to words
    let s = key
      .replace(/_/g, ' ')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim();

    // Title case and uppercase common acronyms
    const words = s.split(' ').map((w) => {
      const wl = w.toLowerCase();
      if (['id', 'url', 'api', 'oscr', 'jira', 'sql', 'db', 'ip'].includes(wl)) return wl.toUpperCase();
      return wl.charAt(0).toUpperCase() + wl.slice(1);
    });
    return words.join(' ');
  };

  // Helper: map status text to badge variant
  const statusVariant = (statusRaw) => {
    const s = (statusRaw || '').toString().toLowerCase();
    if (['success', 'approved', 'completed', 'done', 'ok', 'passed'].includes(s)) return 'success';
    if (['failed', 'error', 'failure', 'errored', 'fail'].includes(s)) return 'failed';
    if (['cancelled', 'canceled', 'aborted'].includes(s)) return 'cancelled';
    if (['pending', 'in-progress', 'running', 'queued', 'processing', 'started'].includes(s)) return 'pending';
    return 'unknown';
  };

  // Helper: keys likely to contain long text content
  const isLongTextKey = (lowerKey) =>
    /(comments|message|description|details|reason|notes|error|stack|trace)/.test(lowerKey);

  // Compute a responsive grid template based on keys
  const computeGridTemplateColumns = (keys) =>
    keys
      .map((k) => {
        const lower = k.toLowerCase();
        if (/_status$|^status$|status$/.test(lower)) return '140px';
        if (lower === 'jira_issue_key') return '180px';
        if (lower === 'jira_issue_transition') return '180px';
        if (/error|stack|trace/.test(lower)) return '240px';
        if (/(^id$|_id$|number$|_number$|request.*number)/.test(lower)) return '160px';
        if (/comments|message|description|details|reason|notes/.test(lower)) return '1fr';
        return '180px';
      })
      .join(' ');

  const columns = logs.length > 0 ? Object.keys(logs[0]) : [];
  const templateCols = computeGridTemplateColumns(columns);
  const statusKeyForAria = columns.find((k) => k.toLowerCase().includes('status'));

  const renderCell = (key, value) => {
    const lower = key.toLowerCase();

    // Status badge cell
    if (lower.includes('status')) {
      const raw = isEmpty(value) ? '' : String(value);
      const label = raw ? raw.toUpperCase() : 'UNKNOWN';
      const variant = statusVariant(raw);
      return (
        <div className="dt-cell" role="cell">
          <span className={`badge badge--${variant}`}>{label}</span>
        </div>
      );
    }

    // Error cell (highlighted in red when not empty)
    if (/error/.test(lower)) {
      const empty = isEmpty(value);
      return (
        <div
          className={`dt-cell truncate ${empty ? 'dt-cell--muted' : 'dt-cell--error'}`}
          title={empty ? '' : String(value)}
          role="cell"
        >
          {formatValue(value)}
        </div>
      );
    }

    // Likely long text fields -> truncate and tooltip
    if (isLongTextKey(lower)) {
      const empty = isEmpty(value);
      return (
        <div
          className={`dt-cell truncate ${empty ? 'dt-cell--muted' : ''}`}
          title={empty ? '' : String(value)}
          role="cell"
        >
          {formatValue(value)}
        </div>
      );
    }

    // ID/number-ish fields -> keep on one line
    const nowrap = /(^id$|_id$|number$|_number$|request.*number)/.test(lower);
    const empty = isEmpty(value);
    return (
      <div className={`dt-cell ${nowrap ? 'nowrap' : ''} ${empty ? 'dt-cell--muted' : ''}`} role="cell">
        {formatValue(value)}
      </div>
    );
  };

  return (
    <section className="page" aria-labelledby="logs-title">
      <h1 id="logs-title">Migration Logs</h1>
      <div className="data-table" role="table" aria-label="Migration logs">
        <div className="data-table__scroll">
          <div className="data-table__inner">
            {columns.length > 0 ? (
              <>
                <div
                  className="dt-header"
                  style={{ gridTemplateColumns: templateCols }}
                  role="row"
                >
                  {columns.map((key) => (
                    <div className="dt-cell" role="columnheader" key={key}>
                      {humanizeKey(key)}
                    </div>
                  ))}
                </div>

                {logs.map((row, idx) => {
                  const primaryKey =
                    row.oscr_request_number ??
                    row.id ??
                    row.request_number ??
                    idx;
                  const rowIdLabel = !isEmpty(row.oscr_request_number)
                    ? `OSCR request ${formatValue(row.oscr_request_number)}`
                    : `Row ${idx + 1}`;
                  const ariaStatus = statusKeyForAria
                    ? (formatValue(row[statusKeyForAria]) || 'UNKNOWN')
                    : 'UNKNOWN';

                  return (
                    <div
                      key={primaryKey}
                      className="dt-row"
                      style={{ gridTemplateColumns: templateCols }}
                      role="row"
                      tabIndex={0}
                      aria-label={`${rowIdLabel}, status ${ariaStatus}`}
                    >
                      {columns.map((colKey) => renderCell(colKey, row[colKey]))}
                    </div>
                  );
                })}
              </>
            ) : (
              <div
                style={{
                  padding: 16,
                  color: 'var(--text-secondary)'
                }}
                role="note"
              >
                No logs available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MigrationLogs;
