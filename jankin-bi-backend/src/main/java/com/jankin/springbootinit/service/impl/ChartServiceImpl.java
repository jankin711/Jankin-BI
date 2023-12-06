package com.jankin.springbootinit.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jankin.springbootinit.model.entity.Chart;
import com.jankin.springbootinit.service.ChartService;
import com.jankin.springbootinit.mapper.ChartMapper;
import org.springframework.stereotype.Service;

/**
* @author Jankin
* @description 针对表【chart(图表信息表)】的数据库操作Service实现
* @createDate 2023-12-04 20:58:09
*/
@Service
public class ChartServiceImpl extends ServiceImpl<ChartMapper, Chart>
    implements ChartService{

}




