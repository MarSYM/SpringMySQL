package com.autotesting.demo;

import static org.junit.Assert.assertEquals;

import org.springframework.boot.test.context.SpringBootTest;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import static org.junit.Assert.*;

import org.junit.AfterClass;
import org.junit.BeforeClass;

//import org.junit.Test;

@SpringBootTest
class DemoApplicationTests extends TestCase	{

//	@Test
//	void contextLoads() {
//	}
//	
//	@Test
//	void checkGetBalance() {
//		
////		assertEquals("A", "A");
//		assertEquals(0, 0);
//	}
	
	
//    public static void main(String[] args) {
//        junit.textui.TestRunner.run(suite());
////    	assertEquals(0, 0); 
//    }
//

//    public static Test suite() {
	public static void test() {
//        TestSuite suite = new TestSuite("All JUnit Tests");
//        suite.addTest(ListTest.suite());
//        suite.addTest(new TestSuite(junit.samples.money.MoneyTest.class));
//        suite.addTest(junit.tests.AllTests.suite());
    	assertEquals(0, 0);
//        return suite;
        
    }
	
	
//	@Test
//	void deposit_test() {
//		// given
//		Calculate cal = new Calculate();
//		
//		// when
//		double balance = 5000;
//		double value = 123;
//		
//		double expect = balance + value ;
//		
//		// then
//		double result = cal.deposit(balance, value);
//		assertThat(expect, is(result));
//		
////	    // given
////	    Employee alex = new Employee("alex");
////	    entityManager.persist(alex);
////	    entityManager.flush();
////	 
////	    // when
////	    Employee found = employeeRepository.findByName(alex.getName());
////	 
////	    // then
////	    assertThat(found.getName())
////	      .isEqualTo(alex.getName());
//	}

}
