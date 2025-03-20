//deleting left zeros from a variable of up to 10 positions.
//OBS.:
//must finish with [0], because returne can be array with elements (match and group).
lv_ticket 				= lv_Ticket.trim().match(/[^0*]\d{1,10}/g)[0];
