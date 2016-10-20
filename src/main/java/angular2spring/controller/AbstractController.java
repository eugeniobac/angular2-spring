package angular2spring.controller;

import org.springframework.beans.factory.annotation.Autowired;

import angular2spring.common.util.CommonHelper;
import angular2spring.model.core.AbstractEntity;

public class AbstractController {
	@Autowired
	private CommonHelper commonHelper;
	
	protected void setUpHistory(AbstractEntity entity) {
		commonHelper.setUpHistory(entity);
	}

}
