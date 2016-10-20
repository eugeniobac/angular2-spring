package angular2spring.service;

import java.io.InputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import angular2spring.dto.DynamicTable;
import angular2spring.dto.XColumn;

@Service
public class AccountService {
	DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	@SuppressWarnings("deprecation")
	public String parseXFile(MultipartFile mFile) {
		try {

			InputStream file = mFile.getInputStream();
			// FileInputStream file = new FileInputStream(new File("B.xlsx"));
			// Create Workbook instance holding reference to .xlsx file
			XSSFWorkbook workbook = new XSSFWorkbook(file);

			// Get first/desired sheet from the workbook
			XSSFSheet sheet = workbook.getSheetAt(1);

			// Iterate through each rows one by one
			Iterator<Row> rowIterator = sheet.iterator();
			int indexRow = 0;

			List<XColumn> columns = new ArrayList<XColumn>();

			List<HashMap<String, String>> fieldValue = new ArrayList<HashMap<String, String>>();
			DynamicTable dt = new DynamicTable();

			while (rowIterator.hasNext()) {
				int indexColumn = 0;
				Row row = rowIterator.next();
				// For each row, iterate through all the columns
				Iterator<Cell> cellIterator = row.cellIterator();
				HashMap<String, String> rowFieldValue = new HashMap<String, String>();
				while (cellIterator.hasNext()) {

					String value = "";
					Cell cell = cellIterator.next();
					// Check the cell type and format accordingly
					
					switch (cell.getCellType()) {
					case Cell.CELL_TYPE_NUMERIC:
						if(DateUtil.isCellDateFormatted(cell))
						   {
						      value=  df.format(cell.getDateCellValue());
						 
						   }else {

						value = cell.getNumericCellValue() + "";
						   }
						break;
					case Cell.CELL_TYPE_STRING:

						value = cell.getStringCellValue() + "";

						break;
					}
					if (indexRow == 0) {
						columns.add(new XColumn(indexColumn + "", value));
					} else {
						
						rowFieldValue.put(indexColumn + "", value);
					}
					indexColumn++;
				}
				if (indexRow != 0)
					fieldValue.add(rowFieldValue);
				System.out.println("");
				indexRow++;
			}

			dt.setColumns(columns);
			dt.setData(fieldValue);
			file.close();

			ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
			String json = ow.writeValueAsString(dt);
			return json;
		} catch (Exception e) {

			e.printStackTrace();
		}
		return "";
	}

}
