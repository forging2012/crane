(function () {
    'use strict';
    angular.module('app')
        .run(run);

    /*@ngInject*/
    function run($rootScope) {
        $rootScope.DOCKER_REGISTRY_URL = DOCKER_REGISTRY_URL;
        $rootScope.CONTAINER_STATUS_LABELS = {
            running: '运行中',
            paused: '暂停中',
            dead: '已崩溃',
            restarting: '正在重启中',
            created: '初始化中',
            exited: '已退出'
        };

        $rootScope.CONTAINER_STATUS_LABELS_CLASS = {
            running: 'text-success',
            paused: 'text-danger',
            dead: 'text-danger',
            restarting: 'text-info',
            created: 'text-info',
            exited: 'text-danger'
        };

        $rootScope.STATS_POINT_NUM = 180;

        $rootScope.DIFF_KIND = {
            0: '修改',
            1: '添加',
            2: '删除'
        };

        $rootScope.NODE_ROLE = {
            worker: 'Node_role_worker',
            manager: 'Node_role_manager'
        };

        $rootScope.NODE_AVAILABILITY = {
            drain: 'Node_availability_drain',
            active: 'Node_availability_active',
            pause: 'Node_availability_pause'
        };

        $rootScope.NODE_STATE = {
            unknown: 'Node_state_unknown',
            down: 'Node_state_down',
            ready: 'Node_state_ready',
            disconnected: 'Node_state_disconnected'
        };

        $rootScope.TASK_STATE = {
            new: 'Task_state_new',
            allocated: 'Task_state_allocated',
            pending: 'Task_state_pending',
            assigned: 'Task_state_assigned',
            accepted: 'Task_state_accepted',
            preparing: 'Task_state_preparing',
            ready: 'Task_state_ready',
            starting: 'Task_state_starting',
            running: 'Task_state_running',
            complete: 'Task_state_complete',
            shutdown: 'Task_state_shutdown',
            failed: 'Task_state_failed',
            rejected: 'Task_state_rejected'
        };

        $rootScope.TASK_RESTART_POLICY_COND = {
            'none': 'Task_restart_policy_none',
            'any': 'Task_restart_policy_any',
            'on-failure': 'Task_restart_policy_on_failure'
        };

        $rootScope.VOL_DRIVER = {
            'local': 'Vol_driver_local'
        };

        $rootScope.RESERVED_NETWORK_NAMES = [
            "ingress",
            "none",
            "host",
            "bridge",
            "docker_gwbridge"
        ];

        $rootScope.ID_LIMIT_LENGTH = 12;

        $rootScope.IMAGE_MAX_SIZE = 1024 * 1024;

    }
})();
