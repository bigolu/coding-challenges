/**
 * This program is used to model various algorithms used in releasing updated versions of software in stages. 
 * 
 * @author Olaolu Emmanuel
 * @version 1.0
 */

/************************* IMPORTS **********************/
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.InputMismatchException;
import java.util.Scanner;


public class Driver {
	
	/**
	 * @param Will ask for filename containing list of users and their relationships (who is coaching who)
	 * @throws IOException
	 */
	public static void main(String[] args) throws IOException {
		/* prompt user for filename until input file is found */
		System.out.print("Please enter filename: ");
		String filename;
		while(true){
			try{
				filename = new Scanner(System.in).nextLine();
				new Scanner(new File(filename)); // ensure file exists
				break;
			}
			catch(FileNotFoundException f){
				System.out.println("File not found, please try again.");
			}
		}
		
		System.out.println("\nPopulating Graph...");
		Infection infection = new Infection(filename); 
		System.out.println("Graph population complete!");
		
		while(true){
			/* prompt user */
			System.out.println("\n1. Total Infection");
			System.out.println("2. Limited Infection");
			System.out.println("3. Quit\n");
			System.out.print("Select 1 - 3: ");
			int selection = 0;
			
			try{ 
				selection = new Scanner(System.in).nextInt();
			}
			catch(InputMismatchException e){
				System.out.println("Invalid selection");
				continue;
			}
			
			switch(selection){
				case 1: //total infection
					System.out.print("Enter name of first person: ");
					String start = new Scanner(System.in).nextLine();
					System.out.print("Enter the version to be updated to: ");
					String version = new Scanner(System.in).nextLine();
					
					if(!infection.hasPerson(start)){
						System.out.println("This person is not in the user base.");
					}
					else{
					    infection.total_infection(start, version);
						System.out.println("*********************User base: *********************\n\n ");
						System.out.println(infection);
					}
					break;
				case 2: //limited infection
					System.out.println("Enter number of users to get new software: ");
					int num_users = new Scanner(System.in).nextInt();
					System.out.println("Enter error bound percentage (between 0 - 100): ");
					double error_bound = new Scanner(System.in).nextDouble();
					System.out.println();
					System.out.print("Enter the version to be updated to: ");
					version = new Scanner(System.in).nextLine();
					
					infection.limited_infection(num_users, error_bound, version);
					System.out.println("*********************User base: *********************\n\n ");
					System.out.println(infection);
					break;
				case 3: //end program
					System.out.println("Session ended.");
					return;
				default: 
					System.out.println("Invalid selection.\n");
			}
		}
	}
	
}
