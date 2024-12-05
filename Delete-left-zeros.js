//deleting left zeros from a variable of up to 10 positions.
lv_ticket 				= lv_Ticket.trim().match(/[^0*]\d{1,10}/g);
