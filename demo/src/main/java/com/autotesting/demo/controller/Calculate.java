package com.autotesting.demo.controller;

public class Calculate {

	public double calculate_percentage(double original, double per) {
		return (original*per)/100 ;
	}
	
	// Deposit =การฝาก
	// Withdraw = การถอน
	// Interest = ดอกเบี้ย
	public double deposit(double balance, double value) {
		return balance + value;
	}

	public double withdraw(double balance, double value) {
		return balance - value;
	}
	
	public double interest(double original, double per) {
		
		return original + calculate_percentage(original,per);
	}
}
