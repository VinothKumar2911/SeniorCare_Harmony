package com.example.ssenior.services;

import com.example.ssenior.model.BookingDetails;
import com.example.ssenior.repo.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    public List<BookingDetails> getAllBookings() {
        return bookingRepo.findAll();
    }

    public Optional<BookingDetails> getBookingById(int id) {
        return bookingRepo.findById(id);
    }

    public BookingDetails createBooking(BookingDetails bookingDetails) {
        return bookingRepo.save(bookingDetails);
    }

    public BookingDetails updateBooking(int id, BookingDetails bookingDetails) {
        bookingDetails.setBookingID(id);
        return bookingRepo.save(bookingDetails);
    }

    public void deleteBooking(int id) {
        bookingRepo.deleteById(id);
    }
   
    public List<BookingDetails> getBookingsByphone(String phone) {
        return bookingRepo.findByPhone(phone);
 
}
}