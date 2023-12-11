package org.example;


import java.util.Date;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Date date = new Date();
        System.out.println(sayHello(date));

        String str = null;
        while (!"exit".equals(str)) {
            str = readInput();
            System.out.println(str);
            if(isPalindrome(str)) {
                System.out.println("bien dis");
            }
        }
        System.out.println(sayGoodBye(date));
    }


    public static String readInput() {
        Scanner sc = new Scanner(System.in);
        return sc.nextLine();
    }

    public static String sayHello(Date date) {
        return date.getHours() < 17 ? "Bonjour" : "Bonsoir";
    }

    public static String sayGoodBye(Date date) {
        return date.getHours() < 17 ? "au revoir" : "bonne soirée";
    }

    public static boolean isPalindrome(String str) {
        return str.toLowerCase().contentEquals(new StringBuilder(str.toLowerCase()).reverse());
    }
}