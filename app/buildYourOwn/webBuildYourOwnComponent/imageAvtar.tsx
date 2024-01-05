import { BxNotification } from '@/app/assets/buildYourOwnAssest/bx_notification';

import { IcRoundCellTower } from '@/app/assets/buildYourOwnAssest/ic_round_cell_tower';

import { IcRoundLogin } from '@/app/assets/buildYourOwnAssest/ic_round_login';

import { IcRoundSchedule } from '@/app/assets/buildYourOwnAssest/ic_round_schedule';

import { MajesticonsAnalyticsLine } from '@/app/assets/buildYourOwnAssest/majesticons_analytics_line';

import { MaterialSymbolsReportOutline } from '@/app/assets/buildYourOwnAssest/material_symbols_report_outline';

import { MaterialSymbolTarget } from '@/app/assets/buildYourOwnAssest/material_symbols_target';

import { MdiFileReportOutline } from '@/app/assets/buildYourOwnAssest/mdi_file_report_outlline';
import { RiSpeedUpFill } from '@/app/assets/buildYourOwnAssest/ri_speed_up_fill';
import { WpfGeoFence } from '@/app/assets/buildYourOwnAssest/wpf_geo_fence';
import { Avatar } from '@mantine/core';

export const ImageAvtar = (props:any) => {

    const {childNumber,colorFill}=props

 

    const AvtarElement = () => {

        if (childNumber === 0) {

            return <MaterialSymbolTarget colorFill={colorFill}/>;

        } else if (childNumber === 1) {

            return <MdiFileReportOutline colorFill={colorFill}/>;

        } else if (childNumber === 2) {

            return <RiSpeedUpFill colorFill={colorFill}/>;

        } else if (childNumber === 3) {

            return <IcRoundSchedule colorFill={colorFill}/>;

        } else if (childNumber === 4) {

            return <MaterialSymbolsReportOutline colorFill={colorFill}/>;

        } else if (childNumber === 5) {

            return <IcRoundLogin colorFill={colorFill}/>;

        } else if (childNumber === 6) {

            return <BxNotification colorFill={colorFill}/>;

        } else if (childNumber === 7) {

            return <WpfGeoFence colorFill={colorFill}/>;

        } else if (childNumber === 8) {

            return <IcRoundCellTower colorFill={colorFill}/>;

        }
        else if (childNumber === 9) {

            return <MaterialSymbolTarget colorFill={colorFill}/>;

        }
        else if (childNumber === 10) {

            return <MdiFileReportOutline colorFill={colorFill}/>;

        }
        else if (childNumber === 11) {

            return <RiSpeedUpFill colorFill={colorFill}/>;

        }
        else if (childNumber === 12) {

            return <IcRoundSchedule colorFill={colorFill}/>;

        }
         else {

            return <MajesticonsAnalyticsLine />;

        }

    };

 

    return (

        <Avatar className='cardSectionImageAvtar'>

            <AvtarElement />

        </Avatar>

    );

};