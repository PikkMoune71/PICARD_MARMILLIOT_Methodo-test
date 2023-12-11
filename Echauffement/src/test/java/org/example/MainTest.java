package org.example;

import org.junit.jupiter.api.Test;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Calendar;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    Calendar calendarMidi = Calendar.getInstance();
    Calendar calendarSoir = Calendar.getInstance();

    @org.junit.jupiter.api.BeforeEach
    void setUp() {
        calendarMidi.set(Calendar.HOUR, 12);
        calendarSoir.set(Calendar.HOUR, 18);
    }

    @org.junit.jupiter.api.AfterEach
    void tearDown() {
    }


    @Test
    public void testReadInput() {
        String input = "Ceci est un test";
        InputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);

        String result = Main.readInput();
        assertEquals(input, result);
    }

    @Test
    void isPalindrome() {
        assertTrue(Main.isPalindrome("kayak"));
        assertTrue(Main.isPalindrome("RadAr"));
        assertTrue(Main.isPalindrome("rAdAr"));
        assertFalse(Main.isPalindrome("test"));
    }

    @Test
    void sayHello() {
        assertEquals("Bonjour", Main.sayHello(calendarMidi.getTime()));
        assertEquals("Bonsoir", Main.sayHello(calendarSoir.getTime()));
    }

    @Test
    void sayGoodBye() {
        assertEquals("au revoir", Main.sayGoodBye(calendarMidi.getTime()));
        assertEquals("bonne soirée", Main.sayGoodBye(calendarSoir.getTime()));
    }
}